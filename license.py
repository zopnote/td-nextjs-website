import os

# Pfad zur Lizenzdatei
LICENSE_FILE = "LICENSE"
# Root-Verzeichnis, von dem aus die Suche startet
ROOT_DIR = "."

def load_license():
    with open(LICENSE_FILE, "r", encoding="utf-8") as f:
        license_text = f.read()
    # In TSX als Blockkommentar einfügen
    commented_license = "/*\n" + license_text + "\n*/\n\n"
    return commented_license

def prepend_license_to_file(file_path, license_comment):
    with open(file_path, "r", encoding="utf-8") as f:
        original_content = f.read()

    # Prüfen, ob die Lizenz bereits eingefügt wurde
    if license_comment.strip() in original_content:
        return

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(license_comment + original_content)

def process_directory(root_dir, license_comment):
    for dirpath, dirnames, filenames in os.walk(root_dir):
        for filename in filenames:
            if filename.endswith(".tsx"):
                file_path = os.path.join(dirpath, filename)
                prepend_license_to_file(file_path, license_comment)
                print(f"License added to {file_path}")

if __name__ == "__main__":
    license_comment = load_license()
    process_directory(ROOT_DIR, license_comment)
