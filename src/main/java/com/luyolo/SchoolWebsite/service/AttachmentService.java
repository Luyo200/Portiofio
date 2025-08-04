package com.luyolo.SchoolWebsite.service;

import com.luyolo.SchoolWebsite.model.Attachment;
import org.springframework.web.multipart.MultipartFile;

public interface AttachmentService {
    Attachment saveAttachment(MultipartFile file);

    Attachment getAttachment(String filedId);
}
