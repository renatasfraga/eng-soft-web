package edu.unisinos.bemapi.utils.error.handler;

import edu.unisinos.bemapi.utils.error.BusinessException;
import edu.unisinos.bemapi.utils.error.DuplicateException;
import edu.unisinos.bemapi.utils.error.NoContentException;
import edu.unisinos.bemapi.utils.error.handler.dto.ConstraintViolationDTO;
import edu.unisinos.bemapi.utils.error.handler.dto.ErrorDTO;
import edu.unisinos.bemapi.utils.error.handler.dto.SubErrorDTO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.servlet.http.HttpServletRequest;
import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

@Slf4j
@ControllerAdvice
public class HandleException {

    @ExceptionHandler(BusinessException.class)
    public ResponseEntity<Object> handleBusinessException(BusinessException e,
                                                          HttpServletRequest request) {
        ErrorDTO messageError = ErrorDTO.builder()
                .timestamp(System.currentTimeMillis())
                .status(HttpStatus.BAD_REQUEST.value())
                .error(e.getMessage())
                .path(request.getContextPath())
                .build();

        log.error("ExceptionHandler: BusinessException - {}", messageError.toString());

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(messageError);
    }

    @ExceptionHandler(DuplicateException.class)
    public ResponseEntity<Object> handleDuplicateException(DuplicateException e,
                                                           HttpServletRequest request) {
        ErrorDTO messageError = ErrorDTO.builder()
                .timestamp(System.currentTimeMillis())
                .status(HttpStatus.CONFLICT.value())
                .error(e.getMessage())
                .path(request.getContextPath())
                .build();

        log.error("ExceptionHandler: DuplicateException - {}", messageError.toString());

        return ResponseEntity.status(HttpStatus.CONFLICT).body(messageError);
    }

    @ExceptionHandler(NoContentException.class)
    public ResponseEntity<Object> handleNoContentException(NoContentException e) {
        log.error("ExceptionHandler: DuplicateException - {}", e.getMessage());

        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<Object> handleConstraintViolationException(ConstraintViolationException e,
                                                                     HttpServletRequest request) {
        Set<SubErrorDTO> subErrorSet = new HashSet<>();

        Iterator<ConstraintViolation<?>> it = e.getConstraintViolations().iterator();

        while (it.hasNext()) {
            subErrorSet.add(SubErrorDTO.builder()
                    .rejectedValue((String) it.next().getInvalidValue())
                    .message(it.next().getMessage())
                    .object(it.next().getRootBeanClass().getSimpleName())
                    .field((String) it.next().getRootBean()).build());
        }

        ConstraintViolationDTO constraintViolationDTO = ConstraintViolationDTO.builder()
                .timestamp(System.currentTimeMillis())
                .status(HttpStatus.BAD_REQUEST.value())
                .error(e.getMessage())
                .path(request.getContextPath())
                .subErrors(subErrorSet).build();

        log.error("ExceptionHandler: handleConstraintViolationException - {}", e.getMessage());

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(constraintViolationDTO);
    }
}
