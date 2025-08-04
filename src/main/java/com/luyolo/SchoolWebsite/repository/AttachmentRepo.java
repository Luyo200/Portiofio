package com.luyolo.SchoolWebsite.repository;

import com.luyolo.SchoolWebsite.model.Attachment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AttachmentRepo extends JpaRepository<Attachment, String> {
}
