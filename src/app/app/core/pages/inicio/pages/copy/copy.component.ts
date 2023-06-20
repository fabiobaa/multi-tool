import { Component, ElementRef, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Categoria } from 'src/app/app/class/categoria/categoria.class';
import { Copia } from 'src/app/app/class/copia/copia.class';
import { CategoriaDBService } from 'src/app/app/core/service/categoria.service';
import { CopiaService } from 'src/app/app/core/service/copia.service';
import { AlertService } from 'src/app/app/shared/services/alert.service';
import tippy from 'tippy.js';
import { CopiesPipe } from "src/app/app/shared/pipes/copies.pipe";
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-copy',
  templateUrl: './copy.component.html',
  styleUrls: ['./copy.component.scss']
})

export class CopyComponent {

  @ViewChild('owlCarousel') owlCarousel!: ElementRef;
  carousel: any;
  // idCopia: number = 0;
  // categorias!: Promise<Categoria[]>;
  categorias!: Categoria[];
  tabActivo = 0;
  categoria!: Categoria;
  textFilter: string = "";
  copias: Copia[] = [];
  filteredCopias: Copia[] = [];
  copiasFavoritas!: Copia[];
  copia!: Copia;
  textCopi: string = "Copiar Texto"
  tooltips: any;

  isCategoria: boolean = false;
  isFavoritos: boolean = false;
  isCopias: boolean = false;

  idCategoriaSeleccionada: number = 0;





  nombreCategoria = new FormControl('', [
    Validators.required,
    Validators.maxLength(20),
    Validators.minLength(3)
  ]);

  customOptions: OwlOptions = {
    autoHeight: false,
    autoWidth: false,
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navText: ['Anterior', 'Siguiente'],
    animateIn: true,
    nav: false,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 7,
      }
    }
  }

  constructor(private categoriaService: CategoriaDBService,
    private copiaService: CopiaService,
    private _alertService: AlertService,
    public copiesPipe: CopiesPipe) {
    this.carousel = this.owlCarousel;
  }


  onSearch() {
    this.filteredCopias = this.copiesPipe.transform(this.copias, this.textFilter);
    this.tooltips.forEach((x: any) => {
      x.destroy();
    });

    setTimeout(() => {
      this.tooltips = tippy('.copiaCategoria', {
        content: 'Copiar texto.',
        onHidden(instance) {
          instance.setContent("Copiar texto.");
        },
        hideOnClick: false
      });
    }, 300);

  }

  clearText() {
    this.textFilter = '';
    this.onSearch();
  }

  ngOnInit(): void {
    this.obtenerCategorias();
    this.consultarCopiasFavoritas();
  }

  async agregarCategoria() {
    this._alertService.crearCategoria({ text: 'Crear categoría' }).then(x => {
      if (x.isConfirmed) {
        this.categoriaService.agregarCategoria(new Categoria(
          x.textInput,
          false)
        ).then(x => {
          if (x > 0) {
            this.obtenerCategorias();
          }
        });
      }
    });
  }

  async obtenerCategorias() {
    this.categoriaService.obtenerCategorias().then(
      categorias => {
        this.categorias = categorias;
        if (this.categorias.length > 0) {
          if(this.idCategoriaSeleccionada != 0){
            this.consultarCopiasPorCategoria(this.idCategoriaSeleccionada);
          } else {
            this.consultarCopiasPorCategoria(this.categorias[0].idCategoria);
          }
          this.isCategoria = false;
        } else {
          this.isCategoria = true;
          this.idCategoriaSeleccionada = 0;
        }
      }
    );
  }

  async consultarCategoria() {

  }

  async actlizarCategoria(idCategoria: number) {
    this.categoriaService.obtenerCategoria(idCategoria).then(categoria => {
      if (categoria !== undefined) {
        this._alertService.actualizaCategoria({ text: 'Actualizar categoría', value: categoria?.nombre }).then(x => {
          if (x.isConfirmed) {
            categoria.nombre = x.textInput;
            this.categoriaService.actualizarCategoria(categoria).then(x => {
              if (x > 0) {
                this.obtenerCategorias();
              }
            });
          }
        });
      }
    });
  }

  async elimarCategoria(idCategoria: number) {
    this._alertService.comfirmDelete({ text: '¿Eliminar categoria?' }).then(x => {
      if (x) {
        this.copiaService.obtenerCopiasPorCategoria(idCategoria).then(x => {
          x.forEach(x => {
            this.copiaService.eliminarCopia(x.idCopia);
          });
          this.categoriaService.eliminarCategoria(idCategoria);
          this._alertService.littleAlertSuccess({ text: 'Categoria eliminada.', timer: 2500 });
          this.obtenerCategorias();
        });

      }
    });
  }

  async consultarCopiasPorCategoria(idCategoria: number) {
    this.idCategoriaSeleccionada = idCategoria;

    let copias = await this.copiaService.obtenerCopiasPorCategoria(idCategoria);
    this.copias = this.copiaService.ordenerxFavorito(copias);
    this.filteredCopias = this.copias;
    if (this.filteredCopias.length > 0) {
      this.isCopias = true;
      setTimeout(() => {
        this.tooltips = tippy('.copiaCategoria', {
          content: 'Copiar texto.',
          onHidden(instance) {
            instance.setContent("Copiar texto.");
          },
          hideOnClick: false
        });
      }, 300);
    } else {
      this.isCopias = false;
    }
  }

  async consultarCopiasFavoritas() {
    this.copiaService.ObtenerCopiasFavoritas().then(x => {
      this.copiasFavoritas = x;

      if (x.length > 0) {
        this.isFavoritos = true;
        setTimeout(() => {
          tippy('.copia', {
            content: 'Copiar texto.',
            onHidden(instance) {
              instance.setContent("Copiar texto.");
            },
            hideOnClick: false
          });
        }, 300);
      } else {
        this.isFavoritos = false;
      }
    });
  }

  async eliminarCopia(idCopia: number, idCategoria: number) {
    this._alertService.comfirmDelete({ text: '¿Eliminar copia?' }).then(x => {
      if (x) {
        this.copiaService.eliminarCopia(idCopia);
        this.consultarCopiasPorCategoria(idCategoria);
        this._alertService.littleAlertSuccess({ text: 'Copia eliminada.', timer: 2500 });
      }
    });

  }

  async agregarCopia() {
    if (this.idCategoriaSeleccionada != 0) {
      this._alertService.crearCopia({ text: 'Agregar copia' }).then(x => {
        if (x.isConfirmed) {
          this.copiaService.agregarCopia(
            new Copia(this.idCategoriaSeleccionada, x.nombreCopi, x.descripcionCopi, false, new Date)
          ).then(x => {
            if (x > 0) {
              this.consultarCopiasPorCategoria(this.idCategoriaSeleccionada);
            }
          })
        }
      });
    } else {
      if (this.categorias.length === 0) {
        this._alertService.littleAlertInfo({ text: 'Cree una categoría.' });
      } else {
        this._alertService.littleAlertInfo({ text: 'Seleccione una categoría.' });
      }
    }
  }

  async actualizarCopia(copia: Copia) {
    this._alertService.actualizaCopia({ text: 'Actualizar categoría', value: copia }).then(x => {
      if (x.isConfirmed) {
        this.copiaService.actualizarCopia(x.copia).then(x => {

        });
      }
    })
  }

  onMouseWheel(event: WheelEvent) {
    this.carousel = this.owlCarousel;
    event.preventDefault();
    if (event.deltaY > 0) {
      this.carousel.next();
    } else {
      this.carousel.prev();
    }
  }

  toggleFavorite(copia: Copia) {
    if (copia.favorito) {
      copia.favorito = false;
    } else {
      copia.favorito = true;
    }
    this.copias.map(x => {
      if (x.idCopia == copia.idCopia) {
        x.favorito = copia.favorito;
      }
    });

    this.copiaService.actualizarFavorito(copia.idCopia, copia.favorito).then(id => {
      this.consultarCopiasFavoritas();
    });

  }

  copyText(text: string, button: any) {
    let instance = button.currentTarget._tippy;
    navigator.clipboard.writeText(text)
      .then(() => {
        instance.setContent("Copiado.");
      })
      .catch((error) => {
        console.error("Error al copiar texto al portapapeles: ", error);
        instance.setContent("No copiado.");
      });
  }

  ordenarCopiasxFavorite(){
    this._alertService.littleAlertInfo({ text: 'No implementado.' });

  }
}
