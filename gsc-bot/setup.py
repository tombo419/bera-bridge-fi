#!/usr/bin/env python3
"""
Setup script for GSC SEO Bot
"""

import os
import sys
from pathlib import Path
import subprocess


def create_directories():
    """Create necessary directories"""
    directories = [
        'data',
        'data/chroma_db',
        'logs'
    ]
    
    for directory in directories:
        Path(directory).mkdir(parents=True, exist_ok=True)
        print(f"✅ Created directory: {directory}")


def install_requirements():
    """Install Python requirements"""
    print("📦 Installing Python requirements...")
    
    try:
        subprocess.check_call([sys.executable, '-m', 'pip', 'install', '-r', 'requirements.txt'])
        print("✅ Requirements installed successfully")
    except subprocess.CalledProcessError as e:
        print(f"❌ Error installing requirements: {e}")
        return False
    
    return True


def create_env_file():
    """Create .env file from template if it doesn't exist"""
    env_file = Path('.env')
    env_example = Path('.env.example')
    
    if not env_file.exists() and env_example.exists():
        env_file.write_text(env_example.read_text())
        print("✅ Created .env file from template")
        print("⚠️  Please edit .env file with your actual API keys and settings")
        return True
    elif env_file.exists():
        print("✅ .env file already exists")
        return True
    else:
        print("❌ .env.example file not found")
        return False


def test_imports():
    """Test if all imports work correctly"""
    print("🧪 Testing imports...")
    
    try:
        # Test basic imports
        import langchain
        import langchain_openai
        import google.oauth2.service_account
        import chromadb
        import sqlite3
        
        print("✅ All imports successful")
        return True
        
    except ImportError as e:
        print(f"❌ Import error: {e}")
        return False


def main():
    """Main setup function"""
    print("🚀 Setting up GSC SEO Bot...")
    
    # Change to script directory
    script_dir = Path(__file__).parent
    os.chdir(script_dir)
    
    success = True
    
    # Create directories
    create_directories()
    
    # Install requirements
    if not install_requirements():
        success = False
    
    # Create env file
    if not create_env_file():
        success = False
    
    # Test imports
    if not test_imports():
        success = False
    
    if success:
        print("\n🎉 Setup completed successfully!")
        print("\n📝 Next steps:")
        print("1. Edit .env file with your API keys")
        print("2. Set up Google Search Console API credentials")
        print("3. Test the connection: python -c \"from integrations.gsc_client import GSCClient; print('OK')\"")
        print("4. Run the bot: python run_bot.py --mode detect")
    else:
        print("\n❌ Setup failed. Please check the errors above.")
        sys.exit(1)


if __name__ == "__main__":
    main()