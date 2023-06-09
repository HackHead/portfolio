#!/bin/bash

# Define color variables
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Change directory to parent directory
echo -e "${GREEN}Changing directory to parent directory${NC}"
cd ../

# Remove the 'portfolio' directory recursively
echo -e "${GREEN}Removing 'portfolio' directory${NC}"
rm -rf portfolio

# Stop and delete 'deno' process managed by pm2
echo -e "${GREEN}Stopping and deleting 'deno' process managed by pm2${NC}"
pm2 stop deno
pm2 delete deno

# Clone the repository from GitHub
echo -e "${GREEN}Cloning the repository from GitHub${NC}"
git clone https://github.com/HackHead/portfolio.git

# Change directory to 'portfolio'
echo -e "${GREEN}Changing directory to 'portfolio'${NC}"
cd portfolio

# Run 'deno' task in production mode
echo -e "${GREEN}Running 'deno' task in production mode${NC}"
deno task prod
