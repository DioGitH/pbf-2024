import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";

export default function ContactsPage() {
    return (
        <Section2 isFancy={true}>
            <Heading>Contacts</Heading>
            <Post title="Maulidio Farhan Rizkullah" body="2141720041" />
            <Post title="Email" body="maulidiobisnis16@gmail.com" />
            <Post title="Whatsapp" body="085289589391" />
        </Section2>
    )
}