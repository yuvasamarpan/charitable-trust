import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import galleryAlbums from './galleryData';
import './AlbumView.css';

export default function AlbumView() {
    const { albumId } = useParams();
    const album = galleryAlbums.find(a => a.id === albumId);
    const [selectedImage, setSelectedImage] = useState(null);

    if (!album) return <h2 style={{ padding: '5rem' }}>Album not found</h2>;

    return (
        <div className="album-view">
            <h2 className="album-title">{album.title}</h2>
            <div className="media-grid">
                {album.media.map((item, index) => (
                    item.type === 'image' ? (
                        <div className="media-item" key={index} onClick={() => setSelectedImage(item.src)}>
                            <img
                                src={require(`../../assets/${item.src}`)}
                                alt={`media-${index}`}
                                className="media-img"
                            />
                        </div>
                    ) : (
                        <div className="media-item" key={index}>
                            <video controls className="media-video">
                                <source src={require(`../../assets/${item.src}`)} type="video/mp4" />
                            </video>
                        </div>
                    )
                ))}
            </div>

            {/* 🖼️ Popup Modal */}
            {selectedImage && (
                <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={require(`../../assets/${selectedImage}`)}
                            alt="enlarged"
                            className="lightbox-img"
                        />
                        <button className="close-btn" onClick={() => setSelectedImage(null)}>×</button>
                    </div>
                </div>
            )}
        </div>
    );
}