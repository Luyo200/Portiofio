package com.luyolo.SchoolWebsite.service;

import com.luyolo.SchoolWebsite.model.Attachment;
import com.luyolo.SchoolWebsite.repository.AttachmentRepo;
import org.springframework.expression.ExpressionException;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class AttachmentServiceImpl implements AttachmentService{
    private AttachmentRepo attachmentRepo;

    public AttachmentServiceImpl(AttachmentRepo attachmentRepo) {
        this.attachmentRepo = attachmentRepo;
    }

    @Override
    public Attachment saveAttachment(MultipartFile file) {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        try {
            if (fileName.contains("..")) {
                throw new RuntimeException("Filename contains invalid path sequence: " + fileName);
            }

            Attachment attachment = new Attachment(
                    fileName,
                    file.getContentType(),
                    file.getBytes()
            );

            return attachmentRepo.save(attachment);
        } catch (IOException e) {
            throw new RuntimeException("Could not save file: " + fileName, e);
        }
    }

    @Override
    public Attachment getAttachment(String fileId) {
        return attachmentRepo.findById(fileId)
                .orElseThrow(() -> new RuntimeException("File not found: " + fileId));
    }


}
