#!/bin/bash

# Clear Vite cache if it exists
if [ -d "node_modules/.vite" ]; then
    echo "Clearing Vite cache..."
    rm -rf node_modules/.vite 2>/dev/null || true
fi

# Start development server with force flag
echo "Starting development server..."
npm run dev -- --force --host 0.0.0.0