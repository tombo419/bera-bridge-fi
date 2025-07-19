"""
GSC Bot Version Information
"""

__version__ = "1.1.0"
__version_info__ = (1, 1, 0)

VERSION_FEATURES = {
    "1.0.0": [
        "Basic SEO issue detection (low CTR, poor ranking, zero traffic)",
        "Title and meta description optimization",
        "Schema markup generation",
        "Performance monitoring"
    ],
    "1.1.0": [
        "Enhanced detection rules with CTR thresholds by position",
        "Content gap analysis using query-level data",
        "Keyword cannibalization detection (duplicate intent)",
        "Indexing problem detection and fixes",
        "Priority scoring based on traffic opportunity",
        "Improved content expansion with H2/H3 section suggestions",
        "Internal linking strategy recommendations",
        "Content rewrite suggestions for zero traffic pages",
        "Canonical URL recommendations for duplicate intent",
        "Detailed query-level metrics analysis"
    ]
}

def get_version():
    """Get the current version string"""
    return __version__

def get_version_info():
    """Get version as tuple of integers"""
    return __version_info__

def get_features(version=None):
    """Get features for a specific version or current version"""
    if version is None:
        version = __version__
    return VERSION_FEATURES.get(version, [])