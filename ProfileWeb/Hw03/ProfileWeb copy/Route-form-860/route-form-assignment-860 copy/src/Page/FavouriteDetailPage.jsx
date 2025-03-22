import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const FavouriteDetailPage = () => {
    const { id } = useParams();
    const [searchParams] = useSearchParams();

    const query = searchParams.get("q");
    const size = searchParams.get("size");

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Favourite Detail</h1>
            <p className="mt-4">
                Your favourite post is <span className="font-semibold">{query}</span>.<br />
                Post ID is <span className="font-semibold">{id}</span>.<br />
                Size is <span className="font-semibold">{size}</span>.
            </p>
        </div>
    );
};

export default FavouriteDetailPage;