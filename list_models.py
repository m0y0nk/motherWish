import google.generativeai as genai

genai.configure(api_key="AIzaSyCN-JUYD8LUT_DXo8exzBRh6BL3g8mi-vo")

with open("available_models.txt", "w") as f:
    f.write("Listing available models...\n")
    try:
        for m in genai.list_models():
            if 'generateContent' in m.supported_generation_methods:
                f.write(f"Model: {m.name}\n")
    except Exception as e:
        f.write(f"Error listing models: {e}\n")
