"use client";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faXmark } from '@fortawesome/free-solid-svg-icons';

// https://api.github.com/repos/FlyingThaCat/subnetify/contents/README.md
const Announcement = () => {
    const [showAnnouncement, setShowAnnouncement] = useState(true);

    const handleAnnouncementClose = () => {
        setShowAnnouncement(false);
    };

    useEffect(() => {
        fetch('https://api.github.com/repos/FlyingThaCat/subnetify/contents/README.md')
            .then((response) => response.json())
            .then((data) => {
                const content = atob(data.content);
                console.log(content);
            });
    }, []);

    return (
        <div className="m-4">
            {showAnnouncement && (
        <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md rounded-lg" role="alert">
  <div className="flex">
  <div className="py-1 pr-2">
        <FontAwesomeIcon icon={faCircleInfo} size='lg' fade />
    </div>
    <div className='py-1 flex-grow'>
      <p className="font-bold">Our privacy policy has changed</p>
      <p className="text-sm">Make sure you know how these changes affect you.</p>
    </div>
    <div>
        <button onClick={handleAnnouncementClose}>
            <FontAwesomeIcon icon={faXmark} size='lg' />
        </button>
    </div>
  </div>
</div>
            )}
</div>
    )
}

export default Announcement;