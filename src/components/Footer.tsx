export default function Footer() {
    return (
        <footer className="py-8 border-t border-white/10 text-center text-sm text-muted-foreground">
            <div className="container mx-auto px-6">
                <p>© {new Date().getFullYear()} Mohan Mahesh. All rights reserved.</p>
            </div>
        </footer>
    );
}
