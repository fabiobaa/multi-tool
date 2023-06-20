import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
import { Alert } from '../Interfaces/alertInterfaces';
import { Copia } from '../../class/copia/copia.class';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  defaultTimer = 3000;
  constructor(public datePipe: DatePipe) { }

  littleAlert = (data: Alert) => {
    Swal.fire({
      customClass: {
        container: 'p-0 overflow-hidden',
        popup: 'popup-littleAlert p-0 rounded-top m-0',
        htmlContainer: 'm-0 rounded-top'
      },
      showClass: {
        popup: 'animate__animated animate__fadeInUp'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutDown'
      },
      html: `<div class="${data.type} m-0 p-2">
             <div class="row m-0">
             <div class="col-2 text-center p-0">
             <span class="material-symbols-outlined fs-4 p-2 bg-body-secondary rounded">${data.icon}</span>
             </div>
             <div class="text-start  col-10 p-2">
             ${data.text}
             </div>
             </div>
             
            </div>
           `,
      showConfirmButton: false,
      timer: (data.timer != null) ? data.timer : 2500,
      allowOutsideClick: false,
      backdrop: false
    });
  }

  littleAlertInfo = (data: Alert) => {
    Swal.fire({
      customClass: {
        container: 'p-0 overflow-hidden',
        popup: 'popup-littleAlert p-0 rounded-top m-0 border border-bottom-0',
        htmlContainer: 'm-0 rounded-top'
      },
      showClass: {
        popup: 'animate__animated animate__fadeInUp'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutDown'
      },
      html: `<div class="littleInfo m-0 p-2">
             <div class="row m-0">
             <div class="col-2 text-center p-0">
             <span class="material-symbols-rounded fill-icon fs-3 bg-primary rounded-5 text-white p-1">info</span>
             </div>
             <div class="text-start  col-10 pt-1 ps-0 pe-0">
             ${data.text}
             </div>
             </div>
             
            </div>
           `,
      showConfirmButton: false,
      timer: (data.timer != null) ? data.timer : 2500,
      allowOutsideClick: false,
      backdrop: false
    });
  }

  littleAlertSuccess = (data: Alert) => {
    Swal.fire({
      customClass: {
        container: 'p-0 overflow-hidden',
        popup: 'popup-littleAlert p-0 rounded-top m-0 border border-bottom-0',
        htmlContainer: 'm-0 rounded-top'
      },
      showClass: {
        popup: 'animate__animated animate__fadeInUp'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutDown'
      },
      html: `<div class="littleSuccess m-0 p-2">
             <div class="row m-0">
             <div class="col-2 text-center p-0">
             <span class="material-symbols-rounded fill-icon fs-3 bg-success rounded-5 text-white p-1">offline_pin</span>
             </div>
             <div class="text-start  col-10 pt-1 ps-0 pe-0">
             ${data.text}
             </div>
             </div>
             
            </div>
           `,
      showConfirmButton: false,
      timer: (data.timer != null) ? data.timer : 2500,
      allowOutsideClick: false,
      backdrop: false
    });
  }

  littleAlertError = (data: Alert) => {
    Swal.fire({
      customClass: {
        container: 'p-0 overflow-hidden',
        popup: 'popup-littleAlert p-0 rounded-top m-0 border border-bottom-0',
        htmlContainer: 'm-0 rounded-top'
      },
      showClass: {
        popup: 'animate__animated animate__fadeInUp'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutDown'
      },
      html: `<div class="littleError m-0 p-2">
             <div class="row m-0">
             <div class="col-2 text-center p-0">
             <span class="material-symbols-rounded fill-icon fs-3 bg-danger rounded-5 text-white p-1">error</span>
             </div>
             <div class="text-start  col-10 pt-1 ps-0 pe-0">
             ${data.text}
             </div>
             </div>
             
            </div>
           `,
      showConfirmButton: false,
      timer: (data.timer != null) ? data.timer : 2500,
      allowOutsideClick: false,
      backdrop: false
    });
  }

  littleAlertWarning = (data: Alert) => {
    Swal.fire({
      customClass: {
        container: 'p-0 overflow-hidden',
        popup: 'popup-littleAlert p-0 rounded-top m-0 border border-bottom-0',
        htmlContainer: 'm-0 rounded-top'
      },
      showClass: {
        popup: 'animate__animated animate__fadeInUp'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutDown'
      },
      html: `<div class="littleWarning m-0 p-2">
             <div class="row m-0">
             <div class="col-2 text-center p-0">
             <span class="material-symbols-rounded fill-icon fs-3 bg-warning rounded-5 text-white p-1">error</span>
             </div>
             <div class="text-start  col-10 pt-1 ps-0 pe-0">
             ${data.text}
             </div>
             </div>
             
            </div>
           `,
      showConfirmButton: false,
      timer: (data.timer != null) ? data.timer : 2500,
      allowOutsideClick: false,
      backdrop: false
    });
  }

  mediumAlert = () => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="">Why do I have this issue?</a>',
      customClass: {
        container: 'overflow-hidden',
        popup: '',
        htmlContainer: 'm-0'
      },
      showClass: {
        popup: 'animate__animated animate__zoomIn'
      },
      hideClass: {
        popup: 'animate__animated animate__zoomOut'
      },
      allowOutsideClick: false,
    })
  }

  big = () => {
    Swal.fire({
      customClass: {
        container: 'p-0 overflow-hidden',
        popup: ' rounded-0 m-0',
        htmlContainer: 'm-0'
      },
      showClass: {
        popup: 'animate__animated animate__zoomIn'
      },
      hideClass: {
        popup: 'animate__animated animate__zoomOut'
      },
      allowOutsideClick: false,
    })
  }

  comfirmDelete = async (data: Alert): Promise<boolean> => {
    return await Swal.fire({
      customClass: {
        container: 'p-0 overflow-hidden',
        popup: 'popup-comfirDelete p-0 rounded-top m-0',
        htmlContainer: 'm-0 container-html-comfirDelete overflow-hidden',
        confirmButton: 'p-0 border-0 bg-transparent pe-1 pb-2',
        cancelButton: 'p-0 border-0 bg-transparent ps-1 pb-2',
        actions: 'mt-0 w-100',
      },
      showClass: {
        popup: 'animate__animated animate__fadeInUp'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutDown '
      },
      html: `<div class="row m-0 pt-3 pb-3">
              <div class="col"><h5 class="mb-0">${data.text}</h5></div>
            </div>
           `,
      icon: 'question',
      iconColor: '#6610f2',
      buttonsStyling: false,
      showCancelButton: true,
      cancelButtonText: `<button class="btn btn-sm pt-0 pb-0 btn-primary">
                          <span class="material-symbols-rounded fs-4 pt-1">
                          close
                          </span>
                        </button>`,
      confirmButtonText: `<button class="btn btn-sm pt-0 pb-0 btn-primary">
                          <span class="material-symbols-rounded fs-4 pt-1">
                          done
                          </span>
                         </button>`,
      allowOutsideClick: false,
    }).then((result) => {
      return result.isConfirmed;
    })
  }

  crearCopia = async (data: Alert): Promise<{ isConfirmed: boolean, nombreCopi: string, descripcionCopi: string }> => {
    return await Swal.fire({
      position: 'top',
      customClass: {
        container: 'p-0 overflow-hidden',
        popup: 'popup-copi p-0 rounded-top m-0 mt-2',
        htmlContainer: 'm-0  overflow-hidden text-primary',
        confirmButton: 'p-0 border-0 bg-transparent pe-1 pb-2',
        cancelButton: 'p-0 border-0 bg-transparent ps-1 pb-2',
        actions: 'mt-2 mb-2 w-100',
        input: 'mt-2 border-primary border border-2'
      },
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp '
      },
      html: `<div class="row m-0 pt-3 pb-3">
               <div class="col"><h5 class="mb-0">${data.text}</h5></div>
             </div>
             <form class="ps-3 pe-3">
              <div class="form-floating mb-3">
                <input autocomplete="off" type="text" class="form-control" id="nombreCopi" placeholder="nombre" formControlName="nombre">
                <label for="nombreCopi">Título</label>
              </div>
              <div class="form-floating">
                <textarea style="height: 200px" class="form-control" id="descripcionCopi" placeholder="Descripción" formControlName="descripcion"></textarea>
                <label for="descripcionCopi">Copia</label>
              </div>
             </form>
            `,
      buttonsStyling: false,
      showCancelButton: true,
      cancelButtonText: `<button class="btn btn-primary">
                           <span class="material-symbols-rounded fs-4 pt-1">
                           close
                           </span>
                         </button>`,
      confirmButtonText: `<button class="btn btn-primary">
                           <span class="material-symbols-rounded fs-4 pt-1">
                           done
                           </span>
                          </button>`,
      allowOutsideClick: false,
      preConfirm: () => {

        const nombreCopi = document.getElementById('nombreCopi') as HTMLInputElement;
        const descripcionCopi = document.getElementById('descripcionCopi') as HTMLInputElement;

        if (nombreCopi.value.length <= 0) {
          Swal.showValidationMessage(
            `El título obligatorio.`
          )

        } else {
          if (nombreCopi.value.length > 25) {
            Swal.showValidationMessage(
              `El título es de máximo 25 caracteres.`
            )
          } else {
            const letrasynumeros = /^[a-zA-Z0-9\s]+$/;
            if (!letrasynumeros.test(nombreCopi.value)) {
              Swal.showValidationMessage(
                `Solo se acepta texto y números.`
              )
            }
          }
        }
        return { nombreCopi: nombreCopi.value, descripcionCopi: descripcionCopi.value }
      },
    }).then((result) => {
      if (result.value?.nombreCopi !== undefined) {
        return { isConfirmed: result.isConfirmed, nombreCopi: result.value.nombreCopi, descripcionCopi: result.value.descripcionCopi };
      } else {
        return { isConfirmed: result.isConfirmed, nombreCopi: '', descripcionCopi: '' };
      }
    })
  }

  actualizaCategoria = async (data: Alert): Promise<{ isConfirmed: boolean, textInput: string }> => {
    return await Swal.fire({
      position: 'top',
      customClass: {
        container: 'p-0 overflow-hidden',
        popup: 'popup-input p-0 rounded-top m-0 mt-2',
        htmlContainer: 'm-0  overflow-hidden text-primary',
        confirmButton: 'p-0 border-0 bg-transparent pe-1 pb-2',
        cancelButton: 'p-0 border-0 bg-transparent ps-1 pb-2',
        actions: 'mt-2 mb-2 w-100',
        input: 'mt-2 border-primary border border-2'
      },
      icon: 'info',
      iconColor: '#6610f2',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp '
      },
      html: `<div class="row m-0 pt-3 pb-3">
               <div class="col"><h5 class="mb-0">${data.text}</h5></div>
             </div>
             <form class="ps-3 pe-3">
             <div class="form-floating mb-3">
               <input autocomplete="off" type="text" class="form-control" id="textInput" placeholder="nombre">
               <label for="textInput">Título</label>
             </div>            
            </form>

            `,
      buttonsStyling: false,
      showCancelButton: true,
      cancelButtonText: `<button class="btn btn-primary ps-2 pe-2">
                           <span class="material-symbols-rounded fs-4 pt-1">
                           close
                           </span>
                         </button>`,
      confirmButtonText: `<button class="btn btn-primary ps-2 pe-2">
                           <span class="material-symbols-rounded fs-4 pt-1">
                           done
                           </span>
                          </button>`,
      allowOutsideClick: false,
      didOpen() {
        const textInput = document.getElementById('textInput') as HTMLInputElement;
        textInput.value = data.value;
      },
      preConfirm: () => {

        const textInput = document.getElementById('textInput') as HTMLInputElement;

        if (textInput.value.length <= 0) {
          Swal.showValidationMessage(
            `El título obligatorio.`
          )
        } else {
          if (textInput.value.length > 18) {
            Swal.showValidationMessage(
              `Máximo 18 caracteres.`
            )
          } else {

            const regex = /^[a-zA-Z0-9\s]+$/;
            if (!regex.test(textInput.value)) {
              Swal.showValidationMessage(
                `Solo se acepta texto y números.`
              )
            }
          }
        }

        return { textInput: textInput.value }
      },
    }).then((result) => {
      if (result.value?.textInput !== undefined) {
        return { isConfirmed: result.isConfirmed, textInput: result.value.textInput };
      }
      return { isConfirmed: result.isConfirmed, textInput: '' };
    })
  }

  crearCategoria = async (data: Alert): Promise<{ isConfirmed: boolean, textInput: string }> => {
    return await Swal.fire({
      position: 'top',
      customClass: {
        container: 'p-0 overflow-hidden',
        popup: 'popup-input p-0 rounded-top m-0 mt-2',
        htmlContainer: 'm-0  overflow-hidden text-primary',
        confirmButton: 'p-0 border-0 bg-transparent pe-1 pb-2',
        cancelButton: 'p-0 border-0 bg-transparent ps-1 pb-2',
        actions: 'mt-2 mb-2 w-100',
        input: 'mt-2 border-primary border border-2'
      },
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp '
      },
      html: `<div class="row m-0 pt-3 pb-3">
               <div class="col"><h5 class="mb-0">${data.text}</h5></div>
             </div>
             <form class="ps-3 pe-3">
             <div class="form-floating mb-3">
               <input autocomplete="off" type="text" class="form-control" id="textInput" placeholder="nombre">
               <label for="textInput">Título</label>
             </div>            
            </form>

            `,
      icon: 'info',
      iconColor: '#6610f2',
      buttonsStyling: false,
      showCancelButton: true,
      cancelButtonText: `<button class="btn btn-primary">
                           <span class="material-symbols-rounded fs-4 pt-1">
                           close
                           </span>
                         </button>`,
      confirmButtonText: `<button class="btn btn-primary">
                           <span class="material-symbols-rounded fs-4 pt-1">
                           done
                           </span>
                          </button>`,
      allowOutsideClick: false,
      preConfirm: (data) => {

        const textInput = document.getElementById('textInput') as HTMLInputElement;

        if (textInput.value.length <= 0) {
          Swal.showValidationMessage(
            `El título obligatorio.`
          )
        } else {
          if (textInput.value.length > 20) {
            Swal.showValidationMessage(
              `Máximo 20 caracteres.`
            )
          } else {

            const regex = /^[a-zA-Z0-9\s]+$/;
            if (!regex.test(textInput.value)) {
              Swal.showValidationMessage(
                `Solo se acepta texto y números.`
              )
            }
          }
        }

        return { textInput: textInput.value }
      },
    }).then((result) => {
      if (result.value?.textInput !== undefined) {
        return { isConfirmed: result.isConfirmed, textInput: result.value.textInput };
      }
      return { isConfirmed: result.isConfirmed, textInput: '' };
    })
  }

  actualizaCopia = async (data: Alert): Promise<{ isConfirmed: boolean, copia: Copia }> => {
    return await Swal.fire({
      position: 'top',
      customClass: {
        container: 'p-0 overflow-hidden',
        popup: 'popup-copi p-0 rounded-top m-0 mt-2',
        htmlContainer: 'm-0  overflow-hidden text-primary',
        confirmButton: 'p-0 border-0 bg-transparent pe-1 pb-2',
        cancelButton: 'p-0 border-0 bg-transparent ps-1 pb-2',
        actions: 'mt-2 mb-2 w-100',
        input: 'mt-2 border-primary border border-2'
      },
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp '
      },
      html: `<div class="row m-0 pt-3 pb-3">
               <div class="col"><h5 class="mb-0">${data.text}</h5></div>
             </div>
             <form class="ps-3 pe-3">
              <div class="form-floating mb-3">
                <input autocomplete="off" type="text" value="${data.value.nombre}" class="form-control" id="tituloCopi">
                <label for="nombreCopi">Título</label>
              </div>
              <div class="form-floating">
                <textarea style="height: 200px" class="form-control" id="textoCopi">${data.value.texto}</textarea>
                <label for="descripcionCopi">Copia</label>
              </div>
              <div class="pt-2 row m-0">
              <div class="col text-start ">
              <span class="badge text-bg-primary">${data.value.nombreCategoria}</span>
              </div>
              <div class="col text-end">
              <small>${this.datePipe.transform(data.value.fecha)}</small>
              </div>
              
              </div>
              
             </form>
            `,
      buttonsStyling: false,
      showCancelButton: true,
      cancelButtonText: `<button class="btn btn-primary">
                           <span class="material-symbols-rounded fs-4 pt-1">
                           close
                           </span>
                         </button>`,
      confirmButtonText: `<button class="btn btn-primary">
                           <span class="material-symbols-rounded fs-4 pt-1">
                           done
                           </span>
                          </button>`,
      allowOutsideClick: false,
      preConfirm: () => {

        const tituloCopi = document.getElementById('tituloCopi') as HTMLInputElement;
        const textoCopi = document.getElementById('textoCopi') as HTMLInputElement;
        data.value.nombre = tituloCopi.value;
        data.value.texto = textoCopi.value;

        if (data.value.nombre.length <= 0) {
          Swal.showValidationMessage(
            `El título obligatorio.`
          )
        } else {
          if (data.value.nombre > 20) {
            Swal.showValidationMessage(
              `Título es de máximo 20 caracteres.`
            )
          } else {

            const letrasynumeros = /^[a-zA-Z0-9\s]+$/;
            if (!letrasynumeros.test(data.value.nombre)) {
              Swal.showValidationMessage(
                `Solo se acepta texto y números.`
              )
            }
          }
        }
        return { copia: data.value }
      },
    }).then((result) => {
      if (result.value?.copia !== undefined) {
        return { isConfirmed: result.isConfirmed, copia: result.value.copia };
      } else {
        return { isConfirmed: result.isConfirmed, copia: new Copia(0, '', '', false, new Date) };
      }
    })
  }

}
