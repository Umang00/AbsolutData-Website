import sys
from PIL import Image

def luma_key(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    new_data = []
    for item in datas:
        # The brightness of the pixel
        intensity = max(item[0], item[1], item[2])
        
        # Threshold curve: aggressively kill dark faint box edges (anything < 35 intensity is 0)
        # Boost everything above to solid alpha
        if intensity < 35:
            alpha = 0
        else:
            # Smoothly ramp up alpha for anti-aliasing
            alpha = min(255, int((intensity - 35) * (255.0 / (255 - 35)) * 1.5))
            
        new_data.append((item[0], item[1], item[2], alpha))

    img.putdata(new_data)
    img.save(output_path, "PNG")
    print(f"Algorithm applied. True transparent PNG saved to {output_path}")

luma_key(
    r'C:\Users\umang\.gemini\antigravity\brain\b5efef7d-9fa6-4553-bd5b-1b7093396f06\logo_black_bg_1775762821214.png', 
    r'c:\Users\umang\AbsolutData Ltd\AbsolutData website\public\logo.png'
)
