package com.luyolo.SchoolWebsite.controller;

import com.luyolo.SchoolWebsite.model.Attachment;
import com.luyolo.SchoolWebsite.model2.ResposeData;
import com.luyolo.SchoolWebsite.service.AttachmentService;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://127.0.0.1:5502")
public class AttachmentController {
    private AttachmentService attachmentService;

    public AttachmentController(AttachmentService attachmentService) {
        this.attachmentService = attachmentService;
    }
    @PostMapping("/upload")
    public ResposeData uploadFile(@RequestParam("file")MultipartFile file){
        Attachment attachment=null;
        String downloadURL= "";
        attachment= attachmentService.saveAttachment(file);
        downloadURL = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/download/")
                .path(attachment.getId())
                .toUriString();
        return  new ResposeData(attachment.getFileName(),
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
                .body((Resource) new ByteArrayResource(attachment.getData()));
    }

    @GetMapping("/documents")
    public List<Attachment> getAllDocuments() {
        return attachmentService.getAllAttachments();
    }
}
