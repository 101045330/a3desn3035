import React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const MyPdfViewer = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <Viewer
            fileUrl='/assets/OnTheWeb.pdf'
            plugins={[
                defaultLayoutPluginInstance,
                // Add other plugins here
            ]}
        />
    );
};

export default MyPdfViewer;