package com.web.MySchool.repository;

import com.web.MySchool.model.Admin;
import com.web.MySchool.model.Attachment;
import org.springframework.boot.json.JacksonJsonParser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AttachmentRepo extends JpaRepository<Attachment, String> {
}

