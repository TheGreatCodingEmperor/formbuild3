using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace formbuild4.FormBuild4Model
{
    [Table("formbase")]
    public partial class Formbase
    {
        [Key]
        [Column(TypeName = "bigint(20)")]
        public long Id { get; set; }
        [Column(TypeName = "longtext")]
        public string Structure { get; set; }
    }
}
