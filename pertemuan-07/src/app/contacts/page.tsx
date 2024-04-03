"use client";

import MyApp from "@/components/atoms/myapp";
import ContactsPage from "@/components/templates/contacts_page";


export default function Home() {
    return <MyApp Component={ContactsPage} pageProps={undefined} />;
}