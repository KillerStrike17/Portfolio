import urllib.request
import json
import time

repos = [
    "Portfolio",
    "A2A-Agent2Agent-Protocol-demo",
    "CP-Journey",
    "A2A-Protocol-with-Neo4j",
    "Google-Agent-Development-Kit-Deep-Dive",
    "A2A-Agent2Agent-Protocol-Gitex-2025",
    "PromoGenie",
    "Stable-Diffusion-with-custom-styles",
    "Law-RAG",
    "ClipClip",
    "Transformers-from-scratch",
    "YOLO-v3-from-Scratch",
    "DavidNet-Cifar10-Dawn-Benchmark",
    "AI-QR-Code",
    "MNIST-99.4-under-8k-parameters",
    "MNIST-Pytorch-99.4-under-10k-parameters",
    "EPAi",
    "EVA-5",
    "10DaysofMLChallenge",
    "Deep-Learning-for-Vision-Using-Tensorflow-Keras",
    "Competitive_Programming",
    "KSP-IPH-2019-table30"
]

results = {}

for repo in repos:
    try:
        # Get default branch
        url = f"https://api.github.com/repos/KillerStrike17/{repo}"
        req = urllib.request.Request(url)
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            default_branch = data.get("default_branch", "main")
            
        # Get tree
        tree_url = f"https://api.github.com/repos/KillerStrike17/{repo}/git/trees/{default_branch}?recursive=1"
        req = urllib.request.Request(tree_url)
        with urllib.request.urlopen(req) as response:
            tree_data = json.loads(response.read().decode())
            
        images = []
        for item in tree_data.get("tree", []):
            path = item.get("path", "")
            if path.lower().endswith((".png", ".jpg", ".jpeg", ".gif")):
                images.append(path)
                
        if images:
            # Let's try to find one that might be a preview or in README
            img_path = images[0]
            for img in images:
                if "output" in img.lower() or "result" in img.lower() or "demo" in img.lower() or "architecture" in img.lower():
                    img_path = img
                    break
            
            raw_url = f"https://raw.githubusercontent.com/KillerStrike17/{repo}/{default_branch}/{img_path.replace(' ', '%20')}"
            results[repo] = raw_url
        else:
            results[repo] = None
    except Exception as e:
        results[repo] = f"Error: {e}"
        
    time.sleep(0.5)
with open("images.json", "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2)
print("Saved to images.json")
