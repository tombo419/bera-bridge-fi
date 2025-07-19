import os
from typing import Optional
from pydantic import Field
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    # OpenAI Configuration
    openai_api_key: str = Field(..., env="OPENAI_API_KEY")
    
    # Google Search Console Configuration
    google_application_credentials: str = Field(..., env="GOOGLE_APPLICATION_CREDENTIALS")
    gsc_site_url: str = Field(..., env="GSC_SITE_URL")
    
    # Vector Store Configuration
    chroma_persist_directory: str = Field("./data/chroma_db", env="CHROMA_PERSIST_DIRECTORY")
    
    # Database Configuration
    database_url: str = Field("sqlite:///./data/gsc_bot.db", env="DATABASE_URL")
    
    # Logging Configuration
    log_level: str = Field("INFO", env="LOG_LEVEL")
    log_file: str = Field("./logs/gsc_bot.log", env="LOG_FILE")
    
    # Agent Configuration
    max_concurrent_tasks: int = Field(5, env="MAX_CONCURRENT_TASKS")
    check_interval_hours: int = Field(24, env="CHECK_INTERVAL_HOURS")
    optimization_batch_size: int = Field(10, env="OPTIMIZATION_BATCH_SIZE")
    
    # SEO Thresholds
    low_ctr_threshold: float = Field(0.01, env="LOW_CTR_THRESHOLD")
    high_impressions_threshold: int = Field(1000, env="HIGH_IMPRESSIONS_THRESHOLD")
    low_position_threshold: int = Field(20, env="LOW_POSITION_THRESHOLD")
    reindex_wait_days: int = Field(7, env="REINDEX_WAIT_DAYS")
    
    class Config:
        env_file = ".env"
        case_sensitive = False


# Global settings instance
settings = Settings()