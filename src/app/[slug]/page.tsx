import { Metadata } from "next";

type Props = {
    params: {
        slug: string;
    }
}
export function generateMetadata({ params }: Props): Metadata {
    return {
        title: `Dynamic page number ${params.slug}`,
        description: "Content of this page is generated dynamically",
    }
  };


export default function SlugPage({ params }: Props) {

    return ( 
        <div className="h-full justify-center flex items-center text-6xl animate-pulse">
            This is a page number {params.slug}
        </div>
     );
}

