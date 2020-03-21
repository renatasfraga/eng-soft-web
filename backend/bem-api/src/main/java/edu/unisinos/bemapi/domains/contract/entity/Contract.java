package edu.unisinos.bemapi.domains.contract.entity;

import edu.unisinos.bemapi.utils.entity.EntityDefault;
import edu.unisinos.bemapi.utils.entity.HashMapConverter;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.util.Map;
import java.util.Set;

@NoArgsConstructor
@Setter
@Getter
@Entity
public class Contract extends EntityDefault {

    @Column(unique = true)
    private String uuid;

    private String title;

    private String description;

    @Column(columnDefinition = "json")
    @Convert(converter = HashMapConverter.class)
    private Map<Object, String> params;

    private String signature;

    @OneToMany(cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    @Fetch(FetchMode.SUBSELECT)
    @JoinColumn(name = "contract_id")
    private Set<Clause> clauses;
}
