import os
import shutil

# Get a list of all .mp4 files in the current directory
files = [f for f in os.listdir('./build/solana/mp4s') if os.path.isfile('./build/solana/mp4s/' + f) and f.endswith('.mp4')]

for file in files:
    print("Arranging " + file)
    # Extract the number from the filename
    number = file.split('.')[0]

    # Check if a directory with that number exists, if not, create it
    if not os.path.exists('./build/solana/mp4s/' + number):
        os.makedirs('./build/solana/mp4s/' + number)

    # Move the file into the directory
    shutil.move('./build/solana/mp4s/' + file, './build/solana/mp4s/' + number)

# Get a list of all .mp4 files in the current directory
png_files = [f for f in os.listdir('./build/pfp') if os.path.isfile('./build/pfp/' + f ) and f.endswith('.png')]

print("Rearranging pngs...")
for file in png_files:
    print("Arranging " + file)
    # Extract the number from the filename
    number = file.split('.')[0]

    # Check if a directory with that number exists, if not, create it
    if os.path.exists('./build/solana/mp4s/' + number):
        # Move the file into the directory
        shutil.copy('./build/pfp/' + file, './build/solana/mp4s/' + number)