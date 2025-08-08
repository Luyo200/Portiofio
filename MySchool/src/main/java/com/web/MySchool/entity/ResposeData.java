package com.web.MySchool.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResposeData {
    private String fileId;
    private String fileName;
    private String downloadURL;
    private String fileType;
    private Long fileSize;


}

