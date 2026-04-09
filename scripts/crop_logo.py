from PIL import Image

def auto_crop(img_path):
    img = Image.open(img_path)
    bbox = img.getbbox()
    if bbox:
        # Add a tiny 2px padding so it doesn't clip anti-aliased edge glow
        padded_bbox = (max(0, bbox[0]-2), max(0, bbox[1]-2), min(img.width, bbox[2]+2), min(img.height, bbox[3]+2))
        cropped = img.crop(padded_bbox)
        cropped.save(img_path)
        print(f"Cropped perfectly to {padded_bbox} to eliminate empty space.")
    else:
        print("No bounding box found.")

auto_crop(r'c:\Users\umang\AbsolutData Ltd\AbsolutData website\public\logo.png')
