type Props = {
    params: {
        blogsId: string
    }
}

export default function BlogDetails({ params }: Props) {
    return (
        <h1>{params.blogsId} Blog</h1>
    )
}