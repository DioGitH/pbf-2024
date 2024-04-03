import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";

export default function AboutPage() {
    return (
        <Section2 isFancy={true}>
            <Heading>About</Heading>
            <Post title="Saya Maulidio Farhan Rizkullah 2141720041" body="Tentang Saya" />
            <Section2 isFancy={true}>
                <Post title="Hobby" body="Playing game"/>
                <Post title="Pendidikan" body="D-4 Teknik Informatika"/>
            </Section2>
        </Section2>
    )
}