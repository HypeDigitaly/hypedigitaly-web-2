#!/usr/bin/env python3
"""
╔══════════════════════════════════════════════════════════════════╗
║              HYPE DIGITALY - LOCAL BUILD SCRIPT                 ║
║                                                                  ║
║  A simple script to build the Astro project locally.            ║
║  Usage: python build.py [command]                               ║
║                                                                  ║
║  Commands:                                                       ║
║    install  - Install npm dependencies only                     ║
║    build    - Build the project (default)                       ║
║    dev      - Start development server                          ║
║    preview  - Preview the production build                      ║
║    clean    - Clean the dist folder                             ║
║    full     - Clean, install, and build                         ║
╚══════════════════════════════════════════════════════════════════╝
"""

import os
import sys
import subprocess
import shutil
from pathlib import Path

# ============================================================================
# CONFIGURATION
# ============================================================================
PROJECT_DIR = Path(__file__).parent.resolve()
ASTRO_DIR = PROJECT_DIR / "astro-src"
DIST_DIR = ASTRO_DIR / "dist"

# ============================================================================
# TERMINAL COLORS (Windows compatible)
# ============================================================================
class Colors:
    """ANSI color codes for terminal output."""
    HEADER = '\033[95m'
    BLUE = '\033[94m'
    CYAN = '\033[96m'
    GREEN = '\033[92m'
    YELLOW = '\033[93m'
    RED = '\033[91m'
    BOLD = '\033[1m'
    END = '\033[0m'

def enable_windows_colors():
    """Enable ANSI colors on Windows terminal."""
    if sys.platform == "win32":
        os.system('')  # Enables ANSI escape sequences in Windows terminal

def print_header(text: str):
    """Print a styled header."""
    print(f"\n{Colors.CYAN}{Colors.BOLD}{'═' * 60}{Colors.END}")
    print(f"{Colors.CYAN}{Colors.BOLD}  {text}{Colors.END}")
    print(f"{Colors.CYAN}{Colors.BOLD}{'═' * 60}{Colors.END}\n")

def print_success(text: str):
    """Print a success message."""
    print(f"{Colors.GREEN}✓ {text}{Colors.END}")

def print_error(text: str):
    """Print an error message."""
    print(f"{Colors.RED}✗ {text}{Colors.END}")

def print_info(text: str):
    """Print an info message."""
    print(f"{Colors.BLUE}→ {text}{Colors.END}")

def print_warning(text: str):
    """Print a warning message."""
    print(f"{Colors.YELLOW}⚠ {text}{Colors.END}")

# ============================================================================
# UTILITY FUNCTIONS
# ============================================================================
def check_node_installed() -> bool:
    """Check if Node.js is installed."""
    try:
        result = subprocess.run(
            ["node", "--version"], 
            capture_output=True, 
            text=True,
            shell=(sys.platform == "win32")
        )
        if result.returncode == 0:
            print_success(f"Node.js found: {result.stdout.strip()}")
            return True
    except FileNotFoundError:
        pass
    print_error("Node.js is not installed. Please install Node.js from https://nodejs.org/")
    return False

def check_npm_installed() -> bool:
    """Check if npm is installed."""
    try:
        result = subprocess.run(
            ["npm", "--version"], 
            capture_output=True, 
            text=True,
            shell=(sys.platform == "win32")
        )
        if result.returncode == 0:
            print_success(f"npm found: v{result.stdout.strip()}")
            return True
    except FileNotFoundError:
        pass
    print_error("npm is not installed. Please install Node.js from https://nodejs.org/")
    return False

def run_npm_command(command: list[str], description: str) -> bool:
    """Run an npm command in the astro-src directory."""
    print_info(f"{description}...")
    print(f"{Colors.CYAN}   Running: npm {' '.join(command)}{Colors.END}\n")
    
    try:
        process = subprocess.Popen(
            ["npm"] + command,
            cwd=ASTRO_DIR,
            shell=(sys.platform == "win32"),
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            text=True,
            bufsize=1,
            universal_newlines=True
        )
        
        # Stream output in real-time
        for line in process.stdout:
            print(f"   {line}", end='')
        
        process.wait()
        
        if process.returncode == 0:
            print_success(f"{description} completed successfully!")
            return True
        else:
            print_error(f"{description} failed with exit code {process.returncode}")
            return False
            
    except Exception as e:
        print_error(f"Error running npm command: {e}")
        return False

# ============================================================================
# BUILD COMMANDS
# ============================================================================
def cmd_install() -> bool:
    """Install npm dependencies."""
    print_header("INSTALLING DEPENDENCIES")
    return run_npm_command(["install"], "Installing dependencies")

def cmd_build() -> bool:
    """Build the Astro project."""
    print_header("BUILDING PROJECT")
    
    # Check if node_modules exists
    if not (ASTRO_DIR / "node_modules").exists():
        print_warning("node_modules not found. Running install first...")
        if not cmd_install():
            return False
    
    return run_npm_command(["run", "build"], "Building production bundle")

def cmd_dev() -> bool:
    """Start the development server."""
    print_header("STARTING DEVELOPMENT SERVER")
    print_info("Press Ctrl+C to stop the server\n")
    
    # Check if node_modules exists
    if not (ASTRO_DIR / "node_modules").exists():
        print_warning("node_modules not found. Running install first...")
        if not cmd_install():
            return False
    
    try:
        subprocess.run(
            ["npm", "run", "dev"],
            cwd=ASTRO_DIR,
            shell=(sys.platform == "win32")
        )
        return True
    except KeyboardInterrupt:
        print_info("\nDevelopment server stopped.")
        return True

def cmd_preview() -> bool:
    """Preview the production build."""
    print_header("PREVIEWING PRODUCTION BUILD")
    
    # Check if dist exists
    if not DIST_DIR.exists():
        print_warning("dist folder not found. Running build first...")
        if not cmd_build():
            return False
    
    print_info("Press Ctrl+C to stop the preview server\n")
    
    try:
        subprocess.run(
            ["npm", "run", "preview"],
            cwd=ASTRO_DIR,
            shell=(sys.platform == "win32")
        )
        return True
    except KeyboardInterrupt:
        print_info("\nPreview server stopped.")
        return True

def cmd_clean() -> bool:
    """Clean the dist folder."""
    print_header("CLEANING BUILD OUTPUT")
    
    if DIST_DIR.exists():
        print_info(f"Removing {DIST_DIR}...")
        try:
            shutil.rmtree(DIST_DIR)
            print_success("dist folder removed successfully!")
            return True
        except Exception as e:
            print_error(f"Failed to remove dist folder: {e}")
            return False
    else:
        print_info("dist folder doesn't exist. Nothing to clean.")
        return True

def cmd_full() -> bool:
    """Perform a full clean build."""
    print_header("FULL CLEAN BUILD")
    
    if not cmd_clean():
        return False
    
    if not cmd_install():
        return False
    
    if not cmd_build():
        return False
    
    print_header("BUILD COMPLETE")
    print_success(f"Production build available at: {DIST_DIR}")
    return True

# ============================================================================
# MAIN ENTRY POINT
# ============================================================================
def print_help():
    """Print usage help."""
    print(__doc__)
    print("\nExamples:")
    print(f"  {Colors.CYAN}python build.py{Colors.END}         - Build the project")
    print(f"  {Colors.CYAN}python build.py dev{Colors.END}     - Start dev server")
    print(f"  {Colors.CYAN}python build.py full{Colors.END}    - Clean and rebuild")
    print(f"  {Colors.CYAN}python build.py preview{Colors.END} - Preview production build")

def main():
    """Main entry point."""
    enable_windows_colors()
    
    # Parse command
    command = sys.argv[1].lower() if len(sys.argv) > 1 else "build"
    
    # Show help
    if command in ["-h", "--help", "help"]:
        print_help()
        return 0
    
    print_header("HYPE DIGITALY BUILD SYSTEM")
    print_info(f"Project directory: {PROJECT_DIR}")
    print_info(f"Astro directory: {ASTRO_DIR}")
    
    # Verify prerequisites
    print_header("CHECKING PREREQUISITES")
    
    if not check_node_installed():
        return 1
    
    if not check_npm_installed():
        return 1
    
    # Verify astro-src directory exists
    if not ASTRO_DIR.exists():
        print_error(f"Astro source directory not found: {ASTRO_DIR}")
        return 1
    
    print_success("All prerequisites met!")
    
    # Execute command
    commands = {
        "install": cmd_install,
        "build": cmd_build,
        "dev": cmd_dev,
        "preview": cmd_preview,
        "clean": cmd_clean,
        "full": cmd_full,
    }
    
    if command not in commands:
        print_error(f"Unknown command: {command}")
        print_help()
        return 1
    
    success = commands[command]()
    
    return 0 if success else 1

if __name__ == "__main__":
    sys.exit(main())

