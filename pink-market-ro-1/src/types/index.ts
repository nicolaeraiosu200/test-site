export interface Post {
    id: string;
    name: string;
    description: string;
    price: number;
    createdAt: Date;
}

export interface User {
    id: string;
    username: string;
    password: string;
}

export interface PasswordGateProps {
    onUnlock: () => void;
}

export interface PostFormProps {
    onSubmit: (post: Post) => void;
}