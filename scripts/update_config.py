import json
import re

encodings = ['utf-16le', 'utf-8-sig', 'utf-8', 'cp1252']
images_data = None
for enc in encodings:
    try:
        with open('images.json', 'r', encoding=enc) as f:
            images_data = json.load(f)
        break
    except Exception:
        pass

if not images_data:
    print("Failed to load images.json")
    exit(1)

# Read the config file
config_path = 'src/data/projects.config.ts'
with open(config_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fallback Unsplash image for repos that didn't have any images
fallback_image = "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&h=300&fit=crop&auto=format"

for repo, img_url in images_data.items():
    if not img_url:
        img_url = fallback_image
    
    # regex to find the block for the specific title
    # we look for title: "repo_name", and then replace the image: "..." in that block
    pattern = r'(title:\s*"' + re.escape(repo) + r'".*?image:\s*")[^"]*(")'
    content = re.sub(pattern, r'\g<1>' + img_url + r'\g<2>', content, flags=re.DOTALL)

with open(config_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Updated {config_path}")
