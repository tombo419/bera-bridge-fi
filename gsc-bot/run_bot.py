#!/usr/bin/env python3
"""
GSC SEO Bot Runner v1.1
Enhanced with priority scoring and advanced detection
"""

import sys
import os
from pathlib import Path

# Add the project root to the path
project_root = Path(__file__).parent
sys.path.insert(0, str(project_root))

# Set default version to 1.1 if not specified
if 'GSC_BOT_VERSION' not in os.environ:
    os.environ['GSC_BOT_VERSION'] = '1.1'
    print("🚀 Running GSC Bot v1.1 with enhanced features...")

from main import main

if __name__ == "__main__":
    main()