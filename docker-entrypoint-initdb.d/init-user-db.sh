#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  CREATE USER $DEV_USER WITH PASSWORD '$DEV_PASSWORD';
  CREATE DATABASE $DEV_DATABASE;
  GRANT ALL PRIVILEGES ON DATABASE $DEV_DATABASE TO $DEV_USER;
  CREATE USER $TEST_USER WITH PASSWORD '$TEST_PASSWORD';
  CREATE DATABASE $TEST_DATABASE;
  GRANT ALL PRIVILEGES ON DATABASE $TEST_DATABASE TO $TEST_USER;
EOSQL

