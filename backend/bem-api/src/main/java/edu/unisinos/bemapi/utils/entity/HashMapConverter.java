package edu.unisinos.bemapi.utils.entity;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.AttributeConverter;
import java.io.IOException;
import java.util.Map;

@Slf4j
@RequiredArgsConstructor
public class HashMapConverter implements AttributeConverter<Map<String, Object>, String> {

    private final ObjectMapper objectMapper;

    @Override
    public String convertToDatabaseColumn(Map<String, Object> attributeMap) {
        String attributeString = null;

        try {
            attributeString = objectMapper.writeValueAsString(attributeMap);
        } catch (JsonProcessingException ex) {
            log.error("Converter - convertToDatabaseColumn -> error - {}", ex.getMessage());
        }

        return attributeString;
    }

    @Override
    public Map<String, Object> convertToEntityAttribute(String attributeString) {
        Map<String, Object> attributeMap = null;

        try {
            attributeMap = objectMapper.readValue(attributeString, Map.class);
        } catch (IOException ex) {
            log.info("HashMapConverter - convertToEntityAttribute -> error - {}", ex.getMessage());
        }

        return attributeMap;
    }
}
