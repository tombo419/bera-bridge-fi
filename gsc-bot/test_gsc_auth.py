#!/usr/bin/env python3

import os
from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

def test_gsc_connection():
    # Load credentials
    credentials_path = "./eloquent-figure-466321-a1-af0f6eef27a2.json"
    
    try:
        credentials = service_account.Credentials.from_service_account_file(
            credentials_path,
            scopes=['https://www.googleapis.com/auth/webmasters.readonly']
        )
        
        service = build('searchconsole', 'v1', credentials=credentials)
        
        print("✅ Successfully authenticated with Google Search Console")
        print(f"Service account: {credentials.service_account_email}")
        
        # List all sites this service account has access to
        print("\n🔍 Checking available sites...")
        try:
            sites_response = service.sites().list().execute()
            sites = sites_response.get('siteEntry', [])
            
            if sites:
                print(f"✅ Found {len(sites)} accessible sites:")
                for site in sites:
                    print(f"  - {site['siteUrl']} ({site.get('permissionLevel', 'unknown')})")
            else:
                print("❌ No sites found. The service account may not have been added to any properties.")
                
        except HttpError as e:
            print(f"❌ Error listing sites: {e}")
            
        # Test specific site access
        test_site = "sc-domain:bera-bridge.fi"
        print(f"\n🎯 Testing access to: {test_site}")
        
        try:
            # Try to get some basic analytics data
            from datetime import datetime, timedelta
            end_date = datetime.now()
            start_date = end_date - timedelta(days=7)
            
            request = {
                'startDate': start_date.strftime('%Y-%m-%d'),
                'endDate': end_date.strftime('%Y-%m-%d'),
                'dimensions': ['page'],
                'rowLimit': 5
            }
            
            response = service.searchanalytics().query(
                siteUrl=test_site,
                body=request
            ).execute()
            
            print(f"✅ Successfully accessed search analytics for {test_site}")
            print(f"   Found {len(response.get('rows', []))} data rows")
            
        except HttpError as e:
            print(f"❌ Error accessing {test_site}: {e}")
            
    except Exception as e:
        print(f"❌ Authentication failed: {e}")

if __name__ == "__main__":
    test_gsc_connection()