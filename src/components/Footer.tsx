"use client";

import { useEffect, useMemo, useState } from "react";

export default function Footer() {
    const [now, setNow] = useState(() => new Date());

    useEffect(() => {
        const id = window.setInterval(() => setNow(new Date()), 1000);
        return () => window.clearInterval(id);
    }, []);

    const dateTimeText = useMemo(() => {
        return new Intl.DateTimeFormat(undefined, {
            year: "numeric",
            month: "long",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        }).format(now);
    }, [now]);

    return (
        <footer className="py-8 border-t border-white/10 text-center text-sm text-muted-foreground">
            <div className="container mx-auto px-6 space-y-2">
                <p>© {now.getFullYear()} Mohan Mahesh. All rights reserved.</p>
                <p className="text-xs" suppressHydrationWarning>
                    {dateTimeText}
                </p>
            </div>
        </footer>
    );
}
