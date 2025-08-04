package com.luyolo.SchoolWebsite.model2;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResposeData {
    private String fileName;
    private String downloadURL;
    private String fileType;
    private Long fileSize;


}
