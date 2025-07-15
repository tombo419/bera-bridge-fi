# DNS Configuration for bera-bridge.fi

Your domain is now configured in Vercel! To complete the setup, you need to update your DNS settings at your domain registrar (domainhotelli.fi).

## 🌐 DNS Settings Required

Add these DNS records at your domain registrar:

### For bera-bridge.fi (root domain)
```
Type: A
Name: @ (or leave empty)
Value: 76.76.21.21
TTL: 3600 (or default)
```

### For www.bera-bridge.fi
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600 (or default)
```

## ✅ Current Configuration

- **Root domain**: bera-bridge.fi → Your Vercel deployment ✅
- **WWW subdomain**: www.bera-bridge.fi → Your Vercel deployment ✅
- **Redirect**: bera-bridge.fi → www.bera-bridge.fi (configured in vercel.json) ✅

## 🔧 How to Update DNS

1. **Log in to your domain registrar** (domainhotelli.fi)
2. **Find DNS settings** for bera-bridge.fi
3. **Remove existing A records** for @ or bera-bridge.fi
4. **Add the new records** listed above
5. **Save changes**

## ⏱️ DNS Propagation

- DNS changes can take up to 48 hours to propagate globally
- Usually takes 5-30 minutes
- You can check progress at: https://dnschecker.org/#A/bera-bridge.fi

## 🧪 Test Your Domain

Once DNS is updated:
- Visit: https://bera-bridge.fi (should redirect to www)
- Visit: https://www.bera-bridge.fi (main site)
- Test article: https://www.bera-bridge.fi/digital-future-finland-2030

## 🔒 SSL Certificates

- Vercel automatically provisions SSL certificates
- Both bera-bridge.fi and www.bera-bridge.fi will have HTTPS
- No additional configuration needed

## 📊 Current Status

- ✅ Domain added to Vercel project
- ✅ Both root and www configured
- ✅ Redirect rules in place
- ⏳ Waiting for DNS update at registrar
- ⏳ SSL certificates will provision after DNS update

## 🚨 Important Notes

1. **Don't change nameservers** - Keep them at domainhotelli.fi
2. **Only update A and CNAME records** as specified above
3. **Keep other records** (MX, TXT, etc.) unchanged
4. **SSL certificates** will auto-provision once DNS points to Vercel

After updating DNS, your site will be live at:
- https://www.bera-bridge.fi (primary)
- https://bera-bridge.fi (redirects to www)