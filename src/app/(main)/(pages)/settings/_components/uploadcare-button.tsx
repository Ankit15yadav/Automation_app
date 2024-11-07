'use client'
import React from 'react'
import { FileUploaderRegular } from "@uploadcare/react-uploader/next"
import '@uploadcare/react-uploader/core.css';

type Props = {
    onUpload?: any
    userImage: string | null
    onDelete?: any
}

const UploadCareButton = (props: Props) => {
    const handleUpload = (event: any) => {
        if (event.successEntries.length > 0) {
            const cdnUrl = event.successEntries[0].cdnUrl;
            if (cdnUrl) {
                console.log('File uploaded:', cdnUrl);
                props.onUpload(cdnUrl);
            }
        }
    };

    return (
        <FileUploaderRegular
            sourceList="local, url, camera, dropbox"
            classNameUploader="uc-light"
            pubkey="81bd3fc228e121c06138"
            onChange={handleUpload}
        />
    );
}

export default UploadCareButton;
