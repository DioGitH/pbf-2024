import { getImageUrlV2 } from '@/utils/utils';

interface Person {
    name: string;
    imageId: string;
}

function MyAvatar({ person, size }: {person: Person; size: number}) {
    return (
        <img
            className="avatar"
            src={getImageUrlV2(person, size < 90 ? 's' : 'b')}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

export default function MyProfile() {
    return (
        <MyAvatar
            size={190}
            person={{
                name: 'Gregorio Y. Zara',
                imageId: '7vQD0fP'
            }}
        />
    );
}