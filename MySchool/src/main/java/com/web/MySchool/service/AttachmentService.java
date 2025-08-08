package com.web.MySchool.service;

import com.web.MySchool.model.Attachment;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface AttachmentService {
    Attachment saveAttachment(MultipartFile file);

    Attachment getAttachment(String filedId);
    List<Attachment> getAllAttachments();
}
