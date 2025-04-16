import React from 'react';

interface DirectionsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const DirectionsModal: React.FC<DirectionsModalProps> = ({ isOpen, onClose }) => {
    React.useEffect(() => {
        if (isOpen) {
            // Hospital location - Life Hospital, Kamareddy
            const hospitalLocation = "Life+Hospital+Kamareddy";

            // Open Google Maps in a new tab
            window.open(`https://www.google.com/maps/search/?api=1&query=${hospitalLocation}`, '_blank');

            // Close the modal after opening Maps
            onClose();
        }
    }, [isOpen, onClose]);

    // No UI needed as we're redirecting directly to Google Maps
    return null;
};

export default DirectionsModal;