import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section from "../atoms/section";

export default function MainPage() {
    return (
        <Section>
            <Heading>Title</Heading>
            <Post title="Maulidio Farhan Rizkullah" body="2141720041" />
            <Section>
                <Heading>Heading</Heading>
                <Heading>Heading</Heading>
                <Heading>Heading</Heading>
                <Section>
                    <Heading>Sub-heading</Heading>
                    <Heading>Sub-heading</Heading>
                    <Heading>Sub-heading</Heading>
                    <Section>
                        <Heading>Sub-sub-heading</Heading>
                        <Heading>Sub-sub-heading</Heading>
                        <Heading>Sub-sub-heading</Heading>
                    </Section>
                </Section>
            </Section>
        </Section>
    );
}