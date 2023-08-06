"use client";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faXmark } from '@fortawesome/free-solid-svg-icons';

// https://api.github.com/repos/FlyingThaCat/subnetify/contents/README.md
const Announcement = () => {
    const [showAnnouncement, setShowAnnouncement] = useState(true);
    const [announcement, setAnnouncement] = useState(null);

    const handleAnnouncementClose = () => {
        setShowAnnouncement(false);
    };

    useEffect(() => {
        fetch('https://api.github.com/repos/FlyingThaCat/subnetify/contents/README.md')
            .then((response) => response.json())
            .then((data) => {
                // Decode the base64 encoded content
                const decodedContent = atob(data.content);
                // ## Announcement
                // | Status | Message                                           |
                // |------- | ------------------------------------------------- |
                // | Info   | Added Some Components, Button, And Level Selector |

                // Split the decoded content into lines
                const lines = decodedContent.split('\n');

                // Find the line containing the announcement section
                const announcementLine = lines.find((line) => line.includes('## Announcement'));

                if (announcementLine) {
                    // Extract the announcement table lines
                    const tableLines = lines.slice(lines.indexOf(announcementLine) + 3, lines.length);
                    
                    // Find the line containing the announcement data
                    const announcementDataLine = tableLines.find((line) => line.includes('|'));

                    if (announcementDataLine) {
                        // Extract the announcement data
                        const announcementData = announcementDataLine.split('|');

                         if (announcementData.length >= 3) {
                            const status = announcementData[1].trim().toLowerCase();
                            const message = announcementData[2].trim();

                            const announcement = {
                                status,
                                message,
                            };
                            
                            setAnnouncement(announcement);
                         }
                    }
                }
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
      <p className="font-bold">Announcement</p>
      <p className="text-sm">{announcement?.message}</p>
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