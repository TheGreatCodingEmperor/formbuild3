using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace formbuild4.FormBuild4Model
{
    public partial class FormBuild4DBContext : DbContext
    {
        public FormBuild4DBContext()
        {
        }

        public FormBuild4DBContext(DbContextOptions<FormBuild4DBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Formbase> Formbase { get; set; }
    }
}
