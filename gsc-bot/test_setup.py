#!/usr/bin/env python3
"""
Test script to verify basic setup
"""

import sys
import os

def test_python_version():
    """Test Python version"""
    print(f"Python version: {sys.version}")
    if sys.version_info < (3, 8):
        print("❌ Python 3.8+ required")
        return False
    print("✅ Python version OK")
    return True

def test_basic_imports():
    """Test basic imports"""
    try:
        import json
        import sqlite3
        import datetime
        import requests
        print("✅ Basic imports successful")
        return True
    except ImportError as e:
        print(f"❌ Basic import error: {e}")
        return False

def test_directories():
    """Test directory creation"""
    dirs = ['data', 'logs', 'data/chroma_db']
    for d in dirs:
        try:
            os.makedirs(d, exist_ok=True)
            print(f"✅ Created directory: {d}")
        except Exception as e:
            print(f"❌ Error creating directory {d}: {e}")
            return False
    return True

def test_env_file():
    """Test .env file creation"""
    if os.path.exists('.env'):
        print("✅ .env file exists")
        return True
    elif os.path.exists('.env.example'):
        with open('.env.example', 'r') as f:
            content = f.read()
        with open('.env', 'w') as f:
            f.write(content)
        print("✅ Created .env file from template")
        return True
    else:
        print("❌ No .env or .env.example file found")
        return False

def main():
    """Main test function"""
    print("🧪 Testing basic setup...")
    
    tests = [
        test_python_version,
        test_basic_imports,
        test_directories,
        test_env_file
    ]
    
    all_passed = True
    for test in tests:
        if not test():
            all_passed = False
    
    if all_passed:
        print("\n🎉 Basic setup test passed!")
        print("\nNext steps:")
        print("1. Install requirements: pip3 install -r requirements.txt")
        print("2. Edit .env file with your API keys")
        print("3. Test GSC connection")
    else:
        print("\n❌ Some tests failed")

if __name__ == "__main__":
    main()