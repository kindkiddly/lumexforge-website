const FONT_LINK =
  "https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Noto+Kufi+Arabic:wght@600;800&display=swap";

export function SeoBlogFontsArabic() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href={FONT_LINK} rel="stylesheet" />
    </>
  );
}
