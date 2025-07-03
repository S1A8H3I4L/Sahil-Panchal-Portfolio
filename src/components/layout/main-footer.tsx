export function MainFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
        <p>&copy; {currentYear} Sahil Portfolio. All rights reserved.</p>
        {/* <p className="text-sm mt-1">Designed with a touch of frost.</p> */}
      </div>
    </footer>
  );
}
