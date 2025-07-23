# Vehicle Images Directory

This directory contains all vehicle images for the M0T0SP0RT car rental and sales website.

## Directory Structure

```
public/images/vehicles/
├── toyota-camry-2023.jpg          # Main image for 2023 Toyota Camry
├── toyota-camry-2023-interior.jpg # Interior shot
├── toyota-camry-2023-side.jpg     # Side view
├── toyota-camry-2023-rear.jpg     # Rear view
├── honda-crv-2022.jpg             # Main image for 2022 Honda CR-V
├── honda-crv-2022-interior.jpg    # Interior shot
├── honda-crv-2022-side.jpg        # Side view
├── honda-crv-2022-rear.jpg        # Rear view
├── bmw-3series-2023.jpg           # Main image for 2023 BMW 3 Series
├── bmw-3series-2023-interior.jpg  # Interior shot
├── bmw-3series-2023-side.jpg      # Side view
├── bmw-3series-2023-rear.jpg      # Rear view
├── ford-f150-2021.jpg             # Main image for 2021 Ford F-150
├── ford-f150-2021-interior.jpg    # Interior shot
├── ford-f150-2021-side.jpg        # Side view
├── ford-f150-2021-rear.jpg        # Rear view
├── tesla-model3-2023.jpg          # Main image for 2023 Tesla Model 3
├── tesla-model3-2023-interior.jpg # Interior shot
├── tesla-model3-2023-side.jpg     # Side view
├── tesla-model3-2023-rear.jpg     # Rear view
├── toyota-sienna-2022.jpg         # Main image for 2022 Toyota Sienna
├── toyota-sienna-2022-interior.jpg # Interior shot
├── toyota-sienna-2022-side.jpg    # Side view
└── toyota-sienna-2022-rear.jpg    # Rear view
```

## Image Requirements

- **Format**: JPG or PNG
- **Resolution**: Minimum 1200x800 pixels (16:9 aspect ratio recommended)
- **File Size**: Optimize for web (under 500KB per image)
- **Quality**: High quality, well-lit photos
- **Background**: Clean, professional backgrounds

## Naming Convention

Use the following naming pattern:
- `{brand}-{model}-{year}.jpg` for main images
- `{brand}-{model}-{year}-{view}.jpg` for additional views

Examples:
- `toyota-camry-2023.jpg`
- `toyota-camry-2023-interior.jpg`
- `toyota-camry-2023-side.jpg`
- `toyota-camry-2023-rear.jpg`

## How to Add New Vehicles

1. Take or obtain high-quality photos of the vehicle
2. Optimize images for web (compress, resize if needed)
3. Name files according to the convention above
4. Place images in this directory
5. Update the `data/vehicles.json` file with the new vehicle information
6. Reference the image paths in the JSON file (e.g., `/images/vehicles/toyota-camry-2023.jpg`)

## Image Optimization Tips

- Use tools like TinyPNG or ImageOptim to compress images
- Maintain aspect ratios for consistent display
- Ensure good lighting and clear visibility of vehicle features
- Include multiple angles for better user experience 