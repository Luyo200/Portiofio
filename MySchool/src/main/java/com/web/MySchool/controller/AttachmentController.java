package com.web.MySchool.controller;



import com.web.MySchool.entity.ResposeData;
import com.web.MySchool.model.Attachment;
import com.web.MySchool.service.AttachmentService;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "https://brighthighschool.netlify.app")
public class AttachmentController {
    private AttachmentService attachmentService;

    public AttachmentController(AttachmentService attachmentService) {
        this.attachmentService = attachmentService;
    }

    @PostMapping("/upload")
    public ResposeData uploadFile(@RequestParam("file") MultipartFile file) {
        Attachment attachment = attachmentService.saveAttachment(file);
        String downloadURL = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/download/")
                .path(attachment.getId())
                .toUriString();
        return new ResposeData(
                attachment.getId(),        // fileId
                attachment.getFileName(),
                downloadURL,
                file.getContentType(),
                file.getSize());
    }

    @GetMapping("/download/{fileId}")
    public ResponseEntity<Resource> downloadFile(@PathVariable String fileId) throws Exception {
        Attachment attachment = attachmentService.getAttachment(fileId);

        if (attachment == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(attachment.getFileType()))
                .header(HttpHeaders.CONTENT_DISPOSITION,
                        "attachment; filename=\"" + attachment.getFileName() + "\"")
                .body(new ByteArrayResource(attachment.getData()));
    }

    @GetMapping("/documents")
    public List<ResposeData> getAllDocuments() {
        List<Attachment> attachments = attachmentService.getAllAttachments();

        return attachments.stream().map(attachment -> {
            String fileUrl = ServletUriComponentsBuilder.fromCurrentContextPath()
                    .path("/download/")
                    .path(attachment.getId())
                    .toUriString();

            return new ResposeData(
                    attachment.getId(),        // fileId included here
                    attachment.getFileName(),
                    fileUrl,
                    attachment.getFileType(),
                    (long) attachment.getData().length
            );
        }).collect(Collectors.toList());
    }
}
