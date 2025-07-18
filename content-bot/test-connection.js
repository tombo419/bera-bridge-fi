import dotenv from 'dotenv';
import { testSupabaseConnection } from './utils/supabase-client.js';
import { testAIConnection } from './utils/ai-client.js';
import { logger } from './utils/logger.js';

dotenv.config();

async function testAllConnections() {
  logger.info('Testing all connections...\n');

  // Test environment variables
  logger.info('Environment Variables:');
  logger.info(`- SUPABASE_URL: ${process.env.SUPABASE_URL ? '✓ Set' : '✗ Missing'}`);
  logger.info(`- SUPABASE_ANON_KEY: ${process.env.SUPABASE_ANON_KEY ? '✓ Set' : '✗ Missing'}`);
  logger.info(`- ANTHROPIC_API_KEY: ${process.env.ANTHROPIC_API_KEY ? '✓ Set' : '✗ Missing'}`);
  logger.info(`- CONTENT_CATEGORIES: ${process.env.CONTENT_CATEGORIES || 'AI,Gaming,Security (default)'}`);
  logger.info(`- AUTO_PUBLISH: ${process.env.AUTO_PUBLISH || 'false (default)'}`);
  logger.info('');

  // Test Supabase
  logger.info('Testing Supabase connection...');
  const supabaseOk = await testSupabaseConnection();
  
  // Test AI
  logger.info('\nTesting AI connection...');
  const aiOk = await testAIConnection();

  // Summary
  logger.info('\n=== Connection Test Summary ===');
  logger.info(`Supabase: ${supabaseOk ? '✓ Connected' : '✗ Failed'}`);
  logger.info(`AI Service: ${aiOk ? '✓ Connected' : '✗ Failed'}`);
  
  if (supabaseOk && aiOk) {
    logger.info('\n✅ All systems operational! You can now run the content bot.');
    logger.info('\nNext steps:');
    logger.info('1. Generate content: npm run generate');
    logger.info('2. Publish content: npm run publish');
    logger.info('3. Start scheduler: npm run schedule');
  } else {
    logger.error('\n❌ Some connections failed. Please check your configuration.');
    process.exit(1);
  }
}

testAllConnections().catch(console.error);